import { readonly } from 'vue';


export function useNotifications(props) {
  const { t } = props;
  const serverMessage = ref(null);

  function handleServerError(error) {
    if (error) {
      console.error(error);
    }
    if (!error || error.name === 'TypeError') {
      setLastServerMessage('somethingHorribleHappened');
    } else if (error && error.name === 'AbortError') {
      setLastServerMessage('requestTimedOut');
    } else {
      setLastServerMessage('somethingHorribleHappenedDueTo', { "cause": error.message || error });
    }
  }

  async function setLastServerMessage(messageCode, args) {
    serverMessage.value = t(messageCode, args);
  }

  const roServerMessage = readonly(serverMessage);

  return {
    roServerMessage, 
    handleServerError, 
    setLastServerMessage,
  }
}
