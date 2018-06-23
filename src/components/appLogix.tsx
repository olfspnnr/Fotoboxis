export const getImages = () => {
  return new Promise((resolve, reject) => {
    const catpics: any[] = [
      { url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-Kitty-yoga.%281%29.jpg" },
      { url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-Double-trouble..jpg" },
      { url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-Cup-of-cute..jpg" },
      { url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-The-big-leap..jpg" },
      { url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-Curious-cat..jpg" },
      { url: "http://www.cutestpaw.com/wp-content/uploads/2016/02/s-Halp.jpeg" }
    ];
    return resolve(catpics);
  });
};
