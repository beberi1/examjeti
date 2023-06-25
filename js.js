function gadmowera() {
  var fileUrl = 'fotoebi/texti.txt';


  var anchor = document.createElement('a');
  anchor.href = fileUrl;
  anchor.download = 'texti.txt';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
