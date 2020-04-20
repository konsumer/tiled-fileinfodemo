/* global tiled, FileInfo, TextFile */

const customTileMapFormat = {
  name: 'FileInfo Tilemap format',
  extension: 'json',

  write: function (map, fileName) {
    const info = {
      absoluteDir: FileInfo.absoluteDir(fileName),
      absoluteFilePath: FileInfo.absoluteFilePath(fileName),
      absolutePath: FileInfo.absolutePath(fileName),
      baseName: FileInfo.baseName(fileName),
      birthTime: FileInfo.birthTime(fileName),
      bundleName: FileInfo.bundleName(fileName),
      caching: FileInfo.caching(fileName),
      canonicalFilePath: FileInfo.canonicalFilePath(fileName),
      canonicalPath: FileInfo.canonicalPath(fileName),
      completeBaseName: FileInfo.completeBaseName(fileName),
      completeSuffix: FileInfo.completeSuffix(fileName),
      dir: FileInfo.dir(fileName),
      exists: FileInfo.exists(fileName),
      fileName: FileInfo.fileName(fileName),
      filePath: FileInfo.filePath(fileName),
      // fileTime: FileInfo.fileTime(fileName),
      group: FileInfo.group(fileName),
      groupId: FileInfo.groupId(fileName),
      isAbsolute: FileInfo.isAbsolute(fileName),
      isBundle: FileInfo.isBundle(fileName),
      isDir: FileInfo.isDir(fileName),
      isExecutable: FileInfo.isExecutable(fileName),
      isFile: FileInfo.isFile(fileName),
      isHidden: FileInfo.isHidden(fileName),
      isNativePath: FileInfo.isNativePath(fileName),
      isReadable: FileInfo.isReadable(fileName),
      isRelative: FileInfo.isRelative(fileName),
      isRoot: FileInfo.isRoot(fileName),
      isShortcut: FileInfo.isShortcut(fileName),
      isSymLink: FileInfo.isSymLink(fileName),
      isSymbolicLink: FileInfo.isSymbolicLink(fileName),
      isWritable: FileInfo.isWritable(fileName),
      lastModified: FileInfo.lastModified(fileName),
      lastRead: FileInfo.lastRead(fileName),
      makeAbsolute: FileInfo.makeAbsolute(fileName),
      metadataChangeTime: FileInfo.metadataChangeTime(fileName),
      owner: FileInfo.owner(fileName),
      ownerId: FileInfo.ownerId(fileName),
      path: FileInfo.path(fileName),
      permissions: FileInfo.permissions(fileName),
      refresh: FileInfo.refresh(fileName),
      size: FileInfo.size(fileName),
      suffix: FileInfo.suffix(fileName),
      symLinkTarget: FileInfo.symLinkTarget(fileName)
    }
    const out = JSON.stringify(info, null, 2)
    console.log(out)
    const file = new TextFile(fileName, TextFile.WriteOnly)
    file.write(out)
    file.commit()
  }
}

tiled.registerMapFormat('FileInfo Tilemap', customTileMapFormat)
