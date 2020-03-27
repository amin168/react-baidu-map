import path from 'path';

export const moduleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md'),
  path.resolve(process.cwd(), 'src'),
  path.resolve(process.cwd(), 'src/APILoader/README.md'),
  path.resolve(process.cwd(), 'src/Circle/README.md'),
  path.resolve(process.cwd(), 'src/Control/README.md'),
  path.resolve(process.cwd(), 'src/CopyrightControl/README.md'),
  path.resolve(process.cwd(), 'src/GeolocationControl/README.md'),
  path.resolve(process.cwd(), 'src/OverviewMapControl/README.md'),
  path.resolve(process.cwd(), 'src/ScaleControl/README.md'),
  path.resolve(process.cwd(), 'src/MapTypeControl/README.md'),
  path.resolve(process.cwd(), 'src/PanoramaControl/README.md'),
  path.resolve(process.cwd(), 'src/CanvasLayer/README.md'),
  path.resolve(process.cwd(), 'src/GroundOverlay/README.md'),
  path.resolve(process.cwd(), 'src/CustomOverlay/README.md'),
  path.resolve(process.cwd(), 'src/InfoWindow/README.md'),
  path.resolve(process.cwd(), 'src/Label/README.md'),
  path.resolve(process.cwd(), 'src/Map/README.md'),
  path.resolve(process.cwd(), 'src/Marker/README.md'),
  path.resolve(process.cwd(), 'src/NavigationControl/README.md'),
  path.resolve(process.cwd(), 'src/PointCollection/README.md'),
  path.resolve(process.cwd(), 'src/Polyline/README.md'),
  path.resolve(process.cwd(), 'src/TileLayer/README.md'),
  path.resolve(process.cwd(), 'src/CurveLine/README.md'),
  path.resolve(process.cwd(), 'src/DrawingManager/README.md'),
  path.resolve(process.cwd(), 'src/Polygon/README.md'),
  path.resolve(process.cwd(), 'src/withMap/README.md'),
];

export const loaderOneOf = [
  [require.resolve('@kkt/loader-less'), {}],
]

export default (conf, opts, webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  conf.module.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: require.resolve('raw-loader'),
      });
    }
    return item;
  });
  // 获取版本
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );
  return conf;
}
