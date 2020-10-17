function mirror(data) {
  return data.slice(0).sort((a,b) => a-b).concat(data.slice(0).sort((a,b) => a-b).slice(0,-1).reverse())
  }