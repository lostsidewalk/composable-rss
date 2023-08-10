import { ref, reactive, readonly } from 'vue';
import axios from "axios";

export function useSettingsService(props) {
  const {
    handleServerError,
    setLastServerMessage
  } = props.notification;

  const settingsIsLoading = ref(false);
  const account = reactive({});
  const subscription = reactive({});

  let compRssApiUrl = import.meta.env.VITE_COMPRSS_API_URL;
  const settingsUrl = compRssApiUrl + '/settings';
  const exportUrl = compRssApiUrl + '/export';
  const deregisterUrl = compRssApiUrl + '/deregister';
  const orderUrl = compRssApiUrl + '/order';
  const subscriptionsUrl = compRssApiUrl + '/subscriptions';

  const auth = props.auth;

  function openSettings() {
    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios.get(settingsUrl, requestOptions)
        .then((response) => {
          let contentType = response.headers['Content-Type'];
          let isJson = contentType && contentType.includes('application/json');

          if (response.status === 200) {
            return isJson ? response.data : {};
          } else {
            if (isJson) {
              throw new Error(response.data.message + (response.data.details ? (': ' + response.data.details) : ''));
            } else {
              throw new Error(response.data);
            }
          }
        })
        .then((data) => {
          Object.keys(account).forEach((key) => {
            delete account[key];
          });
          Object.assign(account, {
            username: data.username,
            emailAddress: data.emailAddress,
            authProvider: data.authProvider,
            authProviderProfileImgUrl: data.authProviderProfileImgUrl,
            authProviderUsername: data.authProviderUsername,
            frameworkConfig: data.frameworkConfig
          });
          if (data.subscription) {
            Object.keys(subscription).forEach((key) => {
              delete subscription[key];
            });
            Object.assign(subscription, data.subscription);
          }
        })
        .catch((error) => {
          handleServerError(error);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          settingsIsLoading.value = false;
        });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  function updateNotificationPreferences(updateNotificationRequest) {
    const enableAccountAlerts = updateNotificationRequest.enableAccountAlerts;
    const enableDailyFeedReport = updateNotificationRequest.enableDailyFeedReport;
    const enableProductNotifications = updateNotificationRequest.enableProductNotifications;

    const newSettings = {
      frameworkConfig: {
        notifications: {
          accountAlerts: enableAccountAlerts,
          dailyFeedReport: enableDailyFeedReport,
          productNotifications: enableProductNotifications,
        }
      }
    };

    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        method: 'PUT',
        url: settingsUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: newSettings,
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios(requestOptions).then((response) => {
        if (response.status === 200) {
          return;
        } else {
          const contentType = response.headers['content-type'];
          const isJson = contentType && contentType.includes('application/json');

          if (isJson) {
            throw new Error(response.data.message + (response.data.details ? (': ' + response.data.details) : ''));
          } else {
            throw new Error(response.data);
          }
        }
      }).then(() => {
        if (newSettings.username) {
          account.username = newSettings.username;
        }
        if (newSettings.emailAddress) {
          account.emailAddress = newSettings.emailAddress;
        }
        if (newSettings.frameworkConfig) {
          if (!account.frameworkConfig) {
            account.frameworkConfig = {};
          }
          Object.assign(account.frameworkConfig, newSettings.frameworkConfig);
        }
        setLastServerMessage('settingsUpdated');
      }).catch((error) => {
        handleServerError(error);
      }).finally(() => {
        clearTimeout(timeoutId);
        settingsIsLoading.value = false;
      });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  function exportData() {
    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        method: 'GET',
        url: exportUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        responseType: 'blob',
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error('Unexpected response status: ' + response.status);
          }
        })
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const anchor = document.createElement('a');
          anchor.href = url;
          anchor.download = 'feedgears-opml-export.xml';
          document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
          setLastServerMessage('opmlExportDownloaded');
        })
        .catch((error) => {
          handleServerError(error);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          settingsIsLoading.value = false;
        });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  function finalizeDeactivation() {
    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        method: 'DELETE',
        url: deregisterUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error('Unexpected response status: ' + response.status);
          }
        })
        .catch((error) => {
          handleServerError(error);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          settingsIsLoading.value = false;
          auth.tearDownLoggedInSession();
        });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  function initPasswordReset() {
    settingsIsLoading.value = true;
    auth.pwResetWithSupplied(account.username, account.emailAddress)
      .then(() => {
        setLastServerMessage('checkEmailForFurther');
      })
      .catch((error) => {
        handleServerError(error);
      })
      .finally(() => {
        settingsIsLoading.value = false;
      });
  }

  function submitOrder() {
    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        method: 'POST',
        url: orderUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios(requestOptions)
        .then((response) => {
          let contentType = response.headers['content-type'];
          let isJson = contentType && contentType.includes('application/json');

          if (response.status === 200) {
            return isJson ? response.data : {};
          } else {
            if (isJson) {
              throw new Error(response.data.message + (response.data.details ? (': ' + response.data.details) : ''));
            } else {
              throw new Error(response.data);
            }
          }
        })
        .then((data) => {
          window.location.href = data.sessionUrl;
        })
        .catch((error) => {
          handleServerError(error);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          settingsIsLoading.value = false;
        });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  function cancelSubscription() {
    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        method: 'PUT',
        url: subscriptionsUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: {
          subscriptionStatus: 'CANCELED'
        },
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            auth.unsubscribe();
            subscription.cancelAtPeriodEnd = true;
            setLastServerMessage('yourSubscriptionWasCanceledClickToResume');
          } else {
            const contentType = response.headers['content-type'];
            const isJson = contentType && contentType.includes('application/json');

            if (isJson) {
              throw new Error(response.data.message + (response.data.details ? (': ' + response.data.details) : ''));
            } else {
              throw new Error(response.data);
            }
          }
        })
        .catch((error) => {
          handleServerError(error);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          settingsIsLoading.value = false;
        });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  function resumeSubscription() {
    settingsIsLoading.value = true;

    auth.getTokenSilently().then((token) => {
      const source = axios.CancelToken.source();

      const requestOptions = {
        method: 'PUT',
        url: subscriptionsUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: {
          subscriptionStatus: 'ACTIVE'
        },
        cancelToken: source.token
      };

      const timeoutId = setTimeout(() => source.cancel('Request timeout'), 15000);

      axios(requestOptions)
        .then((response) => {
          if (response.status === 200) {
            auth.subscribe();
            subscription.cancelAtPeriodEnd = false;
            setLastServerMessage('yourSubscriptionWasResumed');
          } else {
            const contentType = response.headers['content-type'];
            const isJson = contentType && contentType.includes('application/json');

            if (isJson) {
              throw new Error(response.data.message + (response.data.details ? (': ' + response.data.details) : ''));
            } else {
              throw new Error(response.data);
            }
          }
        })
        .catch((error) => {
          handleServerError(error);
        })
        .finally(() => {
          clearTimeout(timeoutId);
          settingsIsLoading.value = false;
        });
    }).catch((error) => {
      handleServerError(error);
      settingsIsLoading.value = false;
    });
  }

  const roAccount = readonly(account);
  const roSubscription = readonly(subscription);
  const roSettingsIsLoading = readonly(settingsIsLoading);

  return {
    roAccount,
    roSubscription,
    roSettingsIsLoading,
    openSettings,
    updateNotificationPreferences,
    exportData,
    finalizeDeactivation,
    initPasswordReset,
    submitOrder,
    cancelSubscription,
    resumeSubscription,
  };
}
