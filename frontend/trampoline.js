const trampoline = (fun, ...args) => {
  let result = fun.call(null, ...args)

  while (result instanceof Function) {
    result = result();
  }

  return result;
}

export default trampoline;
