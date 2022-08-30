function loadToolDependencies() {

  var dependency;
  var element = document.getElementsByTagName('body')[0];

  console.log('loading CSF-CLIMATECHANGE css');
  dependency = document.createElement('link');
  dependency.setAttribute('rel','stylesheet');
  dependency.setAttribute('type','text/css');
  // eslint-disable-next-line no-undef
  dependency.setAttribute('href', CSFTOOL_URL + '/style/csf-climatechange-v7.css?v=4.0.0');
  element.appendChild(dependency);

}
loadToolDependencies();