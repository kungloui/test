function setActiveLink() {
  var pathname = window.location.pathname
  var currentPath = pathname.split("/").slice(-1)[0]

  var navbar = $('#navbar')[0]
  var navbarListItems = navbar.children

  for (var i = 0; i < navbarListItems.length; i++) {
    var listItem = navbarListItems[i]
    var link = listItem.children[0]
    var href = link.getAttribute("href")
    var isCurrentPath = href.includes(currentPath)

    if (isCurrentPath) {
      listItem.className += 'active'
    }
  }
}

setActiveLink()
