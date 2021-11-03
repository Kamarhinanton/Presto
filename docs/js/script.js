// window.addEventListener('DOMContentLoaded', function () {
//     openMenu();
//     filter();
//     openLinks();
//     saveBookmark();
// })

// const openMenu = function () {
//     let filter = document.querySelector('.filter');
//     filter.addEventListener('click', function () {
//         filter.classList.toggle('active')
//     })
// }

// const openLinks = function () {
//     let numberButtons = document.querySelectorAll('.assets__numbers');
//     for (let numberButton of numberButtons) {
//         numberButton.onclick = (e) => {
//             e.target.classList.toggle('active')
//         }
//     }
// }

// const saveBookmark = function () {
//     let bookmarks = document.querySelectorAll('.use__bookmark');
//     for (let bookmark of bookmarks) {
//         bookmark.onclick = () => {
//             bookmark.classList.toggle('active')
//         }
//     }
// }

// const filter = function () {
//     const inputs = document.querySelectorAll('input');
//     let result = document.querySelector('.objects');
//     const objects = [
//         {
//             id: 0,
//             type: 0,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 1,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_1.jpg',
//         },
//         {
//             id: 1,
//             type: 0,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 2,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_5.jpg',
//         },
//         {
//             id: 2,
//             type: 0,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 3,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_6.jpg',
//         },
//         {
//             id: 3,
//             type: 1,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 4,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_2.jpg',
//         },
//         {
//             id: 4,
//             type: 1,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 5,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_3.jpg',
//         },
//         {
//             id: 5,
//             type: 1,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 6,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_7.jpg',
//         },
//         {
//             id: 6,
//             type: 1,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 7,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_8.jpg',
//         },
//         {
//             id: 7,
//             type: 4,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 8,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_4.jpg',
//         },
//         {
//             id: 7,
//             type: 1,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 9,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict.jpg',
//         },
//         {
//             id: 7,
//             type: 2,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 10,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_1.jpg',
//         },
//         {
//             id: 7,
//             type: 3,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 11,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_5.jpg',
//         },
//         {
//             id: 7,
//             type: 3,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 12,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict.jpg',
//         },
//         {
//             id: 7,
//             type: 3,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 13,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict_1.jpg',
//         },
//         {
//             id: 7,
//             type: 5,
//             title: 'Digestzen Flash Sale',
//             'used_total_count': 14,
//             'created_at': 0,
//             'description': 'Flash Sale! 5% off DigestZen® more text here',
//             'preview_image': 'img/pictures/pict.jpg',
//         },

//     ]
//     for (let input of inputs) {
//         input.onclick = (event) => {
//             if (input.checked) {
//                 let filterClass = event.target.dataset['filter'];
//                 let limitArr = limitObj(objects)
//                 let newArr = addSortObjects(limitArr, filterClass);
//                 let rendArr = renderObjects(newArr, result);
//                 sortingObj(rendArr)
//                 saveBookmark();
//                 openLinks();
//             }
//             else {
//                 let filterName = event.target.dataset['name'];
//                 let renderObjects = document.querySelectorAll('.product');
//                 renderObjects.forEach(link => {
//                     if (link.classList.contains(filterName)) {
//                         link.remove();
//                     }
//                 })
//             }
//         }
//     }
// }

// const addSortObjects = function (objects, filterClass) {
//     let filterObjects = [];
//     for (let key in objects) {
//         if (objects[key].type == filterClass) {
//             filterObjects.push(objects[key])
//         }
//     }
//     return filterObjects
// }

// const limitObj = function (array) {
//     const n = 12;
//     const limitArray = array.slice(0, n);
//     return limitArray
// }

// const sortingObj = function (renderObj) {
//     for (let i = 0; i < renderObj.children.length; i++) {
//         for (let j = i; j < renderObj.children.length; j++) {
//             if (+renderObj.children[i].getAttribute('used_total_count') > +renderObj.children[j].getAttribute('used_total_count')) {
//                 replaceNode = renderObj.replaceChild(renderObj.children[j], renderObj.children[i]);
//                 insertAfter(replaceNode, renderObj.children[i]);
//             }
//         }
//     }
//     return renderObj
// }

// const insertAfter = (elem, refElem) => {
//     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// }

// const renderObjects = function (data, result) {
//     for (let el in data) {
//         if (data[el].hasOwnProperty('id') && data[el].hasOwnProperty('type') && data[el].hasOwnProperty('title') && data[el].hasOwnProperty('used_total_count') && data[el].hasOwnProperty('created_at') && data[el].hasOwnProperty('preview_image') && data[el].hasOwnProperty('description') && Object.keys(data[el]).length == 7) {
//             let new_el = document.createElement('div');
//             new_el.className = 'objects__product product';
//             new_el.setAttribute('type', 1)
//             new_el.setAttribute('used_total_count', data[el].used_total_count)
//             new_el.innerHTML = `<div class="product__content"><div class="product__img"><img src="${data[el].preview_image}" alt="картинка"></div><div class="product__description"><div class="product__title">${data[el].title}</div><div class="product__subtitle">${data[el].description}</div></div></div>`;
//             let ObjectClass = addClassToObject(data[el], new_el);
//             result.appendChild(ObjectClass)
//         }
//     }
//     return result
// }

// const addClassToObject = function (element, object) {
//     if (element.type == 0) {
//         object.classList.add('template')
//     }
//     else if (element.type == 1) {
//         object.classList.add('image')
//     }
//     else if (element.type == 2) {
//         object.classList.add('video')
//     }
//     else if (element.type == 3) {
//         object.classList.add('pdf')
//     }
//     else if (element.type == 4) {
//         object.classList.add('gif')
//     }
//     else if (element.type == 5) {
//         object.classList.add('article')
//     }
//     return object
// }


