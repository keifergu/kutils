module.exports = function render(str, data) {
  var re = /\$\{\s*([\w\.\[\]"']*?)\s*\}/g
  return str.replace(re, function(match, captures){
    var repStr = eval('data.' + captures )
    return repStr
  })
}