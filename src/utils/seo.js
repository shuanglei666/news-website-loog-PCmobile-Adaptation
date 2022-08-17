
export default function(that) {
	let head = document.getElementsByTagName('head')
	let meta_keyword = document.createElement('meta')
	
	document.title = that.$t('title')
	
	if(document.querySelector('meta[name="keywords"]')) {
		document.querySelector('meta[name="keywords"]').setAttribute('content', that.$t('keyword'))
	} else {
		meta_keyword.setAttribute('name', 'keywords')
		meta_keyword.setAttribute('content', that.$t('keyword'))
		head[0].appendChild(meta_keyword)
	}
	
	let meta_description = document.createElement('meta')
	if(document.querySelector('meta[name="description"]')) {
		document.querySelector('meta[name="description"]').setAttribute('content', that.$t('keyword'))
	} else {
		meta_description.setAttribute('name', 'description')
		meta_description.setAttribute('content', that.$t('keyword'))
		head[0].appendChild(meta_description)
	}
}