(function() {
  window._pa = window._pa || {};
  // _pa.orderId = "myCustomer@email.com"; // OPTIONAL: attach user email or order ID to conversions
  // _pa.revenue = "19.99"; // OPTIONAL: attach dynamic purchase values to conversions
  var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
  pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.perfectaudience.com/serve/51fb6934dc91ad7bf0000022.js";
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
})();
