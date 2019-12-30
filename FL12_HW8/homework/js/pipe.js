function addOne(x) {
  return x + 1;
}

function pipe(...args) {
    const lenght = args.length;
    for (let i = 1; i < lenght; i++) {
        args[i] = args[i](args[i - 1]);
    }
    return args[lenght - 1];
}

pipe(1, addOne, addOne); //=> 3
