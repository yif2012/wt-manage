const fs = require('fs')
const path = require('path')
module.exports = async(ctx) => {
  try{
    const { files } = await ctx.request.body
    console.log('file:', files)
    const fileName = files.file.path.replace('upload\\upload_','') + '.jpg'
    const readable = fs.createReadStream(files.file.path);
    // 创建写入流
    const writable = fs.createWriteStream(ctx.dirname + '/public/static/images/' + fileName);
    // 通过管道来传输流
    readable.pipe( writable );
    ctx.body = ctx.webCode.SUCCESS(ctx.request.header.referer + 'images/' + fileName)
  } catch (e) {
    console.log(e)
  }
}