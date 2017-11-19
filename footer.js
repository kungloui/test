function pushFooter() {
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.scrollHeight;

  if (windowHeight > bodyHeight) {
    var footer = document.getElementsByTagName('footer')[0]
    footer.style['margin-top'] = windowHeight - bodyHeight + 'px'
  }
}

pushFooter()
