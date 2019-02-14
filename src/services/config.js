let url = `${process.env.PUBLIC_URL}/`

if (window.location.hostname === 'tkt-ohjaajarekisteri-front.herokuapp.com') {
  url = 'https://tkt-ohjaajarekisteri-back.herokuapp.com/'
}

export default url
