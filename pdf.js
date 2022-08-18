import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import $ from "jquery";

export default {
    install (Vue, options) {
        Vue.prototype.getPdf = function (domId, title) {
            return new Promise((rel, rej) => {
				let w = $(domId).width()
				let h = $(domId).prop("scrollHeight")
                html2Canvas(document.querySelector(domId), {
                    width: +w,
					height: +h,
					useCORS: true, //（图片跨域相关）
					allowTaint: true, //允许跨域
                }).then(function (canvas) {
                    rel()
                    let contentWidth = canvas.width
                    let contentHeight = canvas.height
                    let pageHeight = contentWidth / 592.28 * 841.89  // a4纸的尺寸[592.28,841.89]
                    let leftHeight = contentHeight
                    let position = 0
                    let imgWidth = 595.28
                    let imgHeight = 592.28 / contentWidth * contentHeight
                    let pageData = canvas.toDataURL('image/jpeg', 1.0)
                    let PDF = new JsPDF('', 'pt', 'a4')
                    if (leftHeight < pageHeight) {
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)  // 大于1页高度时分页
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight
                            position -= 841.89
                            if (leftHeight > 0) {
                                PDF.addPage()
                            }
                        }
                    }
                    PDF.save(title + '.pdf')
                })
            })
        }
    }
}