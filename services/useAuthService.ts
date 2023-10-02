import { ref, reactive, Ref } from "vue";
import axios, { AxiosError } from "axios";

interface User {
  username: string | null;
}

interface Auth {
  getTokenSilently: () => Promise<string | null>;
  loginWithSupplied: (username: string, password: string) => Promise<void>;
  pwResetWithSupplied: (username: string, email: string) => Promise<void>;
  pwUpdateWithSupplied: (newPassword: string, newPasswordConfirmed: string) => Promise<void>;
  registerWithSupplied: (username: string, email: string, password: string, userType: string) => Promise<{ username: string, password: string }>;
  logout: () => Promise<void>;
  tearDownLoggedInSession: () => void;
  token: string | null;
  user: User;
}

export function useAuthService() {
  const auth: Auth = reactive({
    getTokenSilently: __getToken,
    loginWithSupplied: __loginWithSupplied,
    pwResetWithSupplied: pwResetWithSupplied,
    pwUpdateWithSupplied: pwUpdateWithSupplied,
    registerWithSupplied: registerWithSupplied,
    logout: logout,
    tearDownLoggedInSession: tearDownLoggedInSession,
    token: null,
    user: reactive({
      username: null,
    })
  });
  const isAuthenticated: Ref<boolean> = ref(false);

  // URLs
  let compRssApiUrl = import.meta.env.VITE_COMPRSS_API_URL;
  const currentUserUrl = compRssApiUrl + "/currentuser";
  const authUrl = compRssApiUrl + "/authenticate";
  const pwResetUrl = compRssApiUrl + "/pw_reset";
  const pwUpdateUrl = compRssApiUrl + "/pw_update";
  const registrationUrl = compRssApiUrl + "/register";
  const logoutUrl = compRssApiUrl + "/deauthenticate";

  function log(msg: string) {
    console.log("auth-service: " + msg);
  }

  function isError(error: AxiosError | any): boolean {
    return (
      error.response &&
      (error.response.status === 403 || error.response.status === 401)
    );
  }

  function getError(error: AxiosError | any): string {
    let r = error.response;
    if (r && r.data) {
      let message = r.data.message;
      if (r.data.details) {
        message = message + ": " + r.data.details;
      }
      return message;
    }
    return error.message;
  }

  function setupLoggedInSession(data: any) {
    log("setting up a logged session");
    isAuthenticated.value = true;
    if (data) {
      auth.token = data.authToken;
      auth.user.username = data.username;
    }
  }

  function tearDownLoggedInSession() {
    log("tearing down logged session");
    isAuthenticated.value = false;
    auth.token = null;
    auth.user.username = null;
  }

  function __getToken(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      let isTokenExpired = (t: string) => {
        return Date.now() >= JSON.parse(atob(t.split(".")[1])).exp * 1000;
      };
      if (
        !isAuthenticated.value ||
        !auth.token ||
        isTokenExpired(auth.token)
      ) {
        axios
          .get(currentUserUrl, {
            withCredentials: true,
          })
          .then((response) => {
            if (response.status === 200 && isJsonContent(response.headers)) {
              setupLoggedInSession(response.data);
              resolve(auth.token);
            } else {
              tearDownLoggedInSession();
              reject();
            }
          })
          .catch((error) => {
            if (isError(error)) {
              // check for 401, 403
              log("*** please re-authenticate ***");
            }
            tearDownLoggedInSession();
            reject(getError(error));
          });
      } else {
        resolve(auth.token);
      }
    });
  }

  function isJsonContent(headers: any) {
    const headerKeys = Object.keys(headers);
    for (let i = 0; i < headerKeys.length; i++) {
      let key = headerKeys[i];
      if (key.toLowerCase() === 'content-type') {
        return 'application/json' === headers[key].toLowerCase();
      }
    }

    return false;
  }

  // login methods
  function __loginWithSupplied(username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      log("newsgears-web: login with supplied password and password");
      axios
        .post(
          authUrl,
          {
            username: username,
            password: password,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setupLoggedInSession(response.data);
            resolve();
          } else {
            tearDownLoggedInSession();
            reject();
          }
        })
        .catch((error) => {
          if (isError(error)) {
            // check for 401, 403
            log("*** please re-authenticate ***");
            tearDownLoggedInSession();
          }
          reject(getError(error));
        });
    });
  }

  // pw reset methods
  function pwResetWithSupplied(username: string, email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      log("newsgears-web: pw reset init with supplied username and email");
      axios
        .post(
          pwResetUrl,
          {
            username: username,
            email: email,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            resolve();
          } else {
            reject();
          }
        })
        .catch((error) => {
          reject(getError(error));
        });
    });
  }

  function pwUpdateWithSupplied(newPassword: string, newPasswordConfirmed: string): Promise<void> {
    return new Promise((resolve, reject) => {
      log(
        "newsgears-web: pw update with supplied password and password (confirmed)"
      );
      axios
        .put(
          pwUpdateUrl,
          {
            newPassword: newPassword,
            newPasswordConfirmed: newPasswordConfirmed,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            resolve();
          } else {
            reject();
          }
        })
        .catch((error) => {
          reject(getError(error));
        });
    });
  }
  // registration methods
  function registerWithSupplied(username: string, email: string, password: string, userType: string): Promise<{ username: string, password: string }> {
    return new Promise((resolve, reject) => {
      log(
        "registration with supplied username, email, password, and user type"
      );
      axios
        .post(
          registrationUrl,
          {
            username: username,
            email: email,
            password: password,
            userType: userType,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            resolve({ username, password });
          } else {
            reject();
          }
        })
        .catch((error) => {
          reject(getError(error));
        });
    });
  }
  // logout methods
  function logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .get(logoutUrl, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then(() => {
          log("logout successful");
          resolve(); 
        })
        .catch((error) => {
          reject(getError(error));
        })
        .finally(() => {
          tearDownLoggedInSession();
        });
    });
  }

  return {
    auth,
    isAuthenticated, 
  }
}
