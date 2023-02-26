function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('.profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './Assets/avatar-light.jpg')
  } else {
    img.setAttribute(
      'src',
      'https://scontent.fimp1-2.fna.fbcdn.net/v/t39.30808-6/325838312_872590703989574_2646157063304940256_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHRByFFpyr8CI4g-EYfel1zacCw5o_zvtNpwLDmj_O-0zHcJUJXOz9PxonmVcQdX9eWVw4PXFx3oUMzPmHuydKM&_nc_ohc=2M3ioU2qdKwAX_GzoKB&_nc_oc=AQn-f3NjPoW8cqwQNsZHE4PZm-Mo0z0sSSJ5wiaqcxDYtSPC6Nk8M2JWYo_KDXnpFzs&_nc_ht=scontent.fimp1-2.fna&oh=00_AfAvhT-vHWKyKihf7FX5Fk4Cr2zX4yyPINY0-xvS7Js4vQ&oe=63F5E3B0'
    )
  }

  if (html.classList.contains('light')) {
    img.setAttribute('alt', 'Udson no cabeleireilo')
  } else {
    img.setAttribute('alt', 'Udson tirando uma foto no trabalho')
  }
}
