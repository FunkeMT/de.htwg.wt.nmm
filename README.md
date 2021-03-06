[![BCH compliance](https://bettercodehub.com/edge/badge/FunkeMT/de.htwg.wt.nmm?branch=master)](https://bettercodehub.com/)

# HTWG | Web Technologies | Nine Men's Morris

- [Prezi Presentation](#prezi-presentation)
- [Play Setup](#play-setup) TODO
- [Heroku Deployment](#heroku-deployment)

## Prezi Presentation

<http://prezi.com/ogvpmmhs2juu/?utm_campaign=share&utm_medium=copy>

## Angular 

<https://github.com/fstiehle/de.htwg.wt.nmm/blob/master/ui/angular2/README.md>

## Polymer

https://github.com/fstiehle/de.htwg.wt.nmm/tree/master/ui/polymer

## Heroku Deployment

### Heroku App

<https://de-htwg-wt-nmm.herokuapp.com>

### Remote

1. Install `Heroku CLI`
    1. Download <https://devcenter.heroku.com/articles/heroku-cli>
    2. Verifiy `heroku --version`
    3. LogIn in existing Accoung `heroku login`
2. Go with your CLI to your cloned repo e.g. `my/repos/de.htwg.wt.nmm`
3. Add the Heroku remote `heroku git:remote -a de-htwg-wt-nmm`
4. Work normal with your git(Hub) repo `git add`, `git commit`, `git push origin` etc.
5. Deploy to Heroku `git push heroku`
6. Show in Browser with <https://de-htwg-wt-nmm.herokuapp.com> or in CLI with `heroku open`

### Local

1. Install `sbt` CLI
    * OSX with homebrew `brew sbt`
2. Setup the necessary Heroku environment variables in a new `.env` file in your local repo
    * `echo "PLAY_CONF_FILE='application.prod.local.conf'" >> .env`
    * `heroku config:get PLAY_APP_SECRET -s >> .env`
    * `heroku config:get BUILDPACK_URL -s >> .env`
    * (optional) `heroku config:get GOOGLE_CLIENT_SECRET -s >> .env`
    * (optional) `heroku config:get GOOGLE_CLIENT_ID -s >> .env`
3. Verify `.env` file with `cat .env`
4. Compile project with SBT `sbt compile stage`
5. Run project localy with Heroku `heroku local web`
6. Open App in Browser `http://localhost:5000`
