$(document).ready(function() {
    //CSS选择器
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');
    //属性选择器：可以使用正则表达式：
    // ^ 以什么开头
    // $ 以什么结尾
    // * 匹配多个字符
    // ！ 取反
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');

    //自定义选择器
    // $('tr:even').addClass('alt'); //计算所有相同元素的第几个
    $('tr:nth-child(odd)').addClass('alt'); //从父亲节点从新开始计算是第几个
    $('td:contains(Henry)').addClass('highlight'); //Finding element based on textual content, contains大小写敏感

    //遍历
    $('a').filter(function() {
        return this.hostname && this.hostname != location.hostname;
    }).addClass('external');
    
    $('td:contains(Henry)').next().addClass('highlight');

    $('td:contains(Henry)') // Find every cell containing "Henry"
        .parent() // Select its parent
        .find('td:eq(1)') // Find the 2nd descendant cell
        .addClass('highlight') // Add the "highlight" class
        .end() // Return to the parent of the cell containing "Henry"
        .find('td:eq(2)') // Find the 3rd descendant cell
        .addClass('highlight'); // Add the "highlight" class

});
