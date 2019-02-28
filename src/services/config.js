
/* eslint-disable */ 
 let url = `${process.env.PUBLIC_URL}/`
/* eslint-enable */

if (window.location.hostname === 'tkt-ohjaajarekisteri-front.herokuapp.com') {
  url = 'https://tkt-ohjaajarekisteri-back.herokuapp.com/'
}

export default url