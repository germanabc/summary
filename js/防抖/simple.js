
          window.onload = function() {
				let num = 0
				function scrollTap() {
					num++
					console.log('num为 ${num}')
				}
				// document.addEventListener('scroll', scrollTap);
				
				// var decounce = function(fn, delay) {
				// 	let timer = null;
				// 	return function() {
				// 		let  _this  = this
				// 		clearTimeout(timer) // 每次调用debounce函数都会将前一次的timer清空，确保只执行一次
				// 		timer = setTimeout(() => {
				// 			fn.apply(_this)
				// 		}, delay)
				// 	}
    //             }
				// 
				
				
				
				const debounce = (func, wait = 50) => {
				  // 缓存一个定时器id
				  let timer = 0
				  // 这里返回的函数是每次用户实际调用的防抖函数
				  // 如果已经设定过定时器了就清空上一次的定时器
				  // 开始一个新的定时器，延迟执行用户传入的方法
				  return function(...args) {
					if (timer) clearTimeout(timer)
					timer = setTimeout(() => {
					  func.apply(this, args)
					}, wait)
				  }
				}
				 
				document.addEventListener('scroll', debounce(scrollTap,1000));
         }

