const parseHTML = html => {
  const html_chars = html.split("");

  const _parseHTML = ([x, ...xs], content, inTags) => {
    if (typeof x === 'undefined') {
      return content
    } else if (x === ">") {
      return _parseHTML(xs, content, false)
    } else if (inTags === true){
      return _parseHTML(xs, content, true)
    } else if (x === "<") {
      return _parseHTML(xs, content, true)
    } else {
      return _parseHTML(xs, content + x, inTags)
    }
  }

  return _parseHTML(html_chars, "", false)
}

export default parseHTML;
