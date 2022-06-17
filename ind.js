//Syntax of jquery = $
// $('selector').action()


//Event listeners using jquery

//$('p).click()    //It means click on p.

//We can also write this-  $function()
$(document).ready(function()//It is a short form of document.ready function . It means that when your document is ready then then load this javascript and works on your document otherwise you can also get errors
{
    $('p').click(function()//When clicked on p then run this function
{
    console.log("You have clicked",this)
    // $('p').hide();//It will hide the content in paragraph tag and also hide all paragraphs.
    // $(this).hide();//It will hide only the paragraph on which we have clicked.
})

/*
3 main type of selectors in jquery
Element
Id
Class
*/


//Events In jquery
//Mouseover
// $('p').mouseover(function()
// {
//     console.log("You have Hovered on it")
// })


//Doubleclick
// $('p').dblclick(function()
// {
//     console.log("You have double clicked on",this)
// })


//On method-it is used to add different event handlers.
$('p').on({
    'click': function()
    {
console.log("Clicked")
    }
,
    mouseleave : function()
{
    console.log("Mouseleave")
}}
)


//hide and show function will take 2 arguements 1st is that after how many milleseconds we can completely hide this and second that when it is completely hidden then what function to run.
// $('#cont').hide(3000,function()
// {
//     console.log("Hidden Successfully")
// })


// $('#cont').show(2000,function()
// {
//     console.log("Completely displayed")
// })




//When we will click btn then if it is hide then it will be shown to us and vice versa.
// $('#btn').click(function()
// {
//     $('#cont').toggle(5000)
// })


// FadeOut
// FadeIn
// FadeToggle
// FadeTo


//Slide functions
//SlideUp
// SlideDown
// SlideToggle
//In these functions speed and function parameters are optional

// $('#cont').slideUp(3000)     //It will slide the content Up if it is down
// $('#cont').slideDown(3000)    //It will slide down the content if it is up
// $('#cont').slideToggle(3000 ,function()        //It will do the reverse of what exists
// {
//     console.log("Slide Done")
// })        

//Animate Functions in Jquery
// $('#cont').animate(
//     {
//         opacity:0.3,
//         height:'150px',
//         width:'350px',
//     },2000)//Do all these animations in 2 seconds.


//We can also write different time out for different peoperties
// $('#cont').animate({opacity:0.4},4000)
// $('#cont').animate({height:'150px'},1000)
// $('#cont').animate({width:'350px'},1000)

$('#cont').stop()  //By this we can stop animation.


//Dom Manipulation
// $('#cont').text('hello')   //It will replace the content in cont with hello.
//  $('#cont').html('<p>hello</p>') //It is used to change  Html.
//  $('#cont').empty()   //it will empty the cont content.
//  $('#cont').remove()  //It will remove the element
// $('#cont').addClass('myclass')   //adding class.
//  $('#cont').removeClass('myclass')   //Remove class

//Css
// $('#cont').css('background-color','red')    //It will make its background color red
// $('#cont').css('color','blue')
})