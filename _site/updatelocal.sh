pkill jekyll;sleep 3 && cp index.html tmp.html && cp index_bak.html index.html && sh -c "rm -r _site/ & jekyll serve --watch & sleep 3 && exit" && cp _site/index.html index2.html && cp tmp.html index.html && echo congratulations! commands execute ok to here!