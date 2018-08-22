export default {
  HEADER_BTN_CLICK (e) {
    return {
      type: 'HEADER_BTN_CLICK',
      payload: {
        task: e.currentTarget.getAttribute('data-task'),
        target: e.currentTarget.getAttribute('data-target')
      }
    }
  }
}