class Carousel {
  constructor(element, options = {}) {
    this.element = element
    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 1,
    }, options)
    this.children = [].slice.call(element.children)
    let root = this.createDivWithClass('carousel')
    let container = this.createDivWithClass('carousel_container')
    root.appendChild(container)
    this.element.appendChild(root)
    this.children.forEach(function(child){
      this.createDivWithClass('carousel_time')
      container.appendChildChild(child)
    })
  }

  createDivWithClass (className){
    let div = document.createElement('div')
    div.setAttribute('class', className)
    return div
  }
}
document.addEventListener('DOMContentLoaded', function(){
  new Carousel(document.querySelector('.item-a'), {
    slidesToScroll: 3,
    slidesVisible: 3
  });

})
