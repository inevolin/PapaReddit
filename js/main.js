
$(document).ready(() => {
  loadPosts();

  $('#update').on('click', e => {
    e.preventDefault();
    loadPosts()
  })
})

function loadPosts() {
  $('.coms').empty();
  $('.status').text('loading...')

  let subs = $('#subreddits').val().split(' ').map(x => x.replace('/','').trim()).join('+')
  const LIMIT = $('#limit').val()

  const url = `https://www.reddit.com/r/${subs || 'all'}/comments/.json?limit=${LIMIT}`;
  console.log(url)
  
  $.get(url, data => {

    if (!data.data.children.length)
      return $('.status').text('No data found, please adjust the parameters.');

    console.log('found: ' + data.data.children.length + ' items')
    let i = 0;
    for (const o of data.data.children) {
      const c = o.data

      // show only matching filter
      const filters = $('#filters').val().split(' ').map(x => x.trim()).filter(x=> x.length > 0)
      let skip = true;
      for (let fil of filters) {
        fil = fil.toLowerCase()
        skip = !(c.link_title.toLowerCase().includes(fil)  || c.body.toLowerCase().includes(fil));
        let regex = new RegExp(`${escapeRegex(fil)}`, "ig");
        c.link_title=c.link_title.replace(regex, match =>  `<span style="background-color:yellow;">${match}</span>`)
        c.body_html=c.body_html.replace(regex, match =>  `<span style="background-color:yellow;">${match}</span>`)
      }
      if (filters.length && skip) continue;

      // add items to table
      let dd  = `${i++ + 1}. <strong>${c.link_title}</strong> `
      dd += `<a class="acom" target="_blank" href="${c.link_permalink + '' + c.name}">${c.subreddit_name_prefixed}</a> `;
      dd += `<br>${ htmlDecode(c.body_html) } `;
      const td = `<td>${dd}</td>`;
      const tr = `<tr>${td}</tr>`;
      $('.coms').append(tr) 
    }

    if (i == 0)
      $('.status').text('No data passed the filter(s)')
    else
      $('.status').text('')

  }).fail(e => {
    $('.status').text('Error getting data, try again.')
  })
}

function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function htmlDecode(value) {
  return $("<textarea/>").html(value).text();
}