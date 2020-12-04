'use strictr';

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(text: string) {
  if (text.search('x') === -1) {
    return text;
  } else {
    return (text = text.replace('x', '')), removeX(text);
  }
}

console.log(
  removeX(
    'there are a lot of lowercase xxx and there are some uppercase XXXX and now there are some lowercase and uppercase mixed xxxXXxxXXXXxxx'
  )
);
