import { observable, action } from "mobx";

class PostStore {
  @observable post = null;

  endpoint = "post";

  constructor(initialData = {}) {
    this.post = initialData.post;
  }

  @action setPost(post) {
    this.post = post;
  }
}

export default PostStore;
