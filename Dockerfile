FROM tdfischer/spacewiki

RUN make clean

ADD _site-settings.scss /srv/spacewiki/theme/_site-settings.scss
ADD _site.scss /srv/spacewiki/theme/_site.scss
ADD sutro.jpg /srv/spacewiki/static/img/sutro.jpg
ADD local_settings.py /srv/spacewiki/local_settings.py

RUN make static
