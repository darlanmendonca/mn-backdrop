class MnBackdrop {
  static show(options = {}) {
    if (options.hasOwnProperty('target')) {
      const {target} = options
      this.target = target
    }
    document.body.classList.add('mn-backdrop-visible')
  }

  static hide(options = {}) {
    const {target} = options
    if (target === this.target) {
      document.body.classList.remove('mn-backdrop-visible')
    }
  }

  static get isVisible() {
    return document.body.classList.contains('mn-backdrop-visible')
  }
}

window.MnBackdrop = MnBackdrop
document.addEventListener('keyup', escape)

function escape(event) {
  const esc = event.key === 'Escape'

  if (esc && MnBackdrop.isVisible) {
    MnBackdrop.target = undefined
    MnBackdrop.hide()
  }
}
