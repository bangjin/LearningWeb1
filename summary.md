$(document).ready(function(){
	//do something
	//文档加载完成之后执行，只执行一次。
})


#2 元素选择

## DOM


##CSS选择器：CSS selectors

选择器：tag name、id、class。
selector type | CSS | jQuery | Desc
-----   | --- | --- | ---
Tag name | p {}  | $('p') | 选择所有p标签
ID  | #someid  |  $('#someid') | 选择id为someid的元素
Class  | .someclass  | $('.someclass')  |  选择所有class为someclass的元素

##属性选择器：Attribute selectors

##自定义选择器：Custom selectors



####Form selectors

Selector | Match
--- | ----
:input | Input, text area, select, and button elements

:button | Button elements and input elements with a type attribute equal to button

:enabled | Form elements that are enabled

:disabled | Form elements that are disabled

:checked | Radio buttons or checkboxes that are checked

:selected | Option elements that are selected


##DOM 遍历方法：DOM traversal methods


##访问DOM元素：Accessing DOM elements
以下两种方法等价
```
varmyTag = $('#my-element').get(0).tagName;
varmyTag = $('#my-element')[0].tagName;
```

#3 事件处理：Handling Events

## Performing tasks on page load

## Handling simple events

## Event propagation

## Altering the journey the event object

## Removing an event handler

## Simulating user interaction

