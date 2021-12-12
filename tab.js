// 하드코딩
// $('.tab-button').eq(0).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');
//   $('.tab-button').eq(0).addClass('active');
//   $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-button').eq(1).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');
//   $('.tab-button').eq(1).addClass('active');
//   $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).click(function(){
//   $('.tab-button').removeClass('active');
//   $('.tab-content').removeClass('show');
//   $('.tab-button').eq(2).addClass('active');
//   $('.tab-content').eq(2).addClass('show');
// })

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).click(function () {
//     // $('.tab-button').removeClass('active');
//     // $('.tab-content').removeClass('show');
//     // $('.tab-button').eq(i).addClass('active');
//     // $('.tab-content').eq(i).addClass('show');
//     opentab(i);
//   })
// }

// juqery문법으로 html 데이타 저장 방법
//$('.list).data('이름', '값');
// 꺼내쓸때
// $('.list).data('이름); 

function opentab(i) {
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(i).addClass('active');
  $('.tab-content').eq(i).addClass('show');
}


$('.list').click(function(e) {
  // 최종
  opentab(e.target.dataset.id);
  // console.log(e.target);
  // if(e.target == document.querySelectorAll('.tab-button')[0]) {
  //   opentab(0);
  // }
  // if(e.target == document.querySelectorAll('.tab-button')[1]) {
  //   opentab(1);
  // }
  // if(e.target == document.querySelectorAll('.tab-button')[2]) {
  //   opentab(2);
  // }
  // 트릭

})