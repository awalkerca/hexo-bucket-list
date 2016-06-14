var cheerio = require('cheerio');

hexo.extend.tag.register('bucket_list', function(args, content){

    var doc = cheerio.load(content);

    var allCount = doc('.bucket-list li').length;
    var doneCount = doc('.bucket-list li.done').length;

    var percentage = (doneCount / allCount * 100).toFixed(0);

    var completionRender = `<p class='bucket-lists-completion'>
                Completed: ${doneCount} of ${allCount}
                <span class="percentage">${percentage}</span>
            </p>`;

    return `${completionRender}<div class='bucket-lists'>${content}</div>`;

}, {ends: true});
