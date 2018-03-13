const parseHTML = html => {
  let html_chars = html.split("");
  let content = "";

  while (content.length < 200 && html_chars.length > 0) {

    let [x, ...xs] = html_chars
    let inTags = false

    if (x === ">") {
      inTags = false
    } else if (inTags === false){
      content += x
    } else if (x === "<") {
      inTags = true
    }

    html_chars = xs
  }

  return content
}

export default parseHTML;
