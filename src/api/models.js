import {get, post, upload} from "./http";

export const _get = function(url, data, success, error) {
  get(url, data)
    .then(res => {
      success(res);
    })
    .catch(err => {
      error && error(err);
    });
};

export const _post = function (url, data, success, error) {
  post(url, data).then(res => {
    success(res);
  })
    .catch(err => {
      console.log(error);
      error && error(err);
    });
};


