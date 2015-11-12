var elixir = require('laravel-elixir');

elixir.config.assetsPath = '';
elixir.config.publicPath = '';
elixir.config.css.sass.folder = 'scss'

elixir(function(mix) {
  if(!elixir.config.production) {
    mix.sass('pt-serif.scss');
  } else {
    mix.sass('pt-serif.scss', 'css/pt-serif.min.css');
  }
});
