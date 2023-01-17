import Api from '@/assets/js/api';
// import qs from 'qs';

const apiPrefix = import.meta.env.VITE_APP_API;
const apiPath = import.meta.env.VITE_APP_PATH;
// const apiPrefix = import.meta.env.VITE_LOCAL_API;

// Api 自 Api 繼承所有屬性與方法
class atrApi extends Api {

  // 登入
  static async login({ username, password }) {
    const params = {
      username, password,
    };
    const res = await this.callAxios('POST', `${apiPrefix}admin/signin`, params, undefined, undefined, false);
    return res;
  }

  // 登出
    static async logOut() {
    const res = await this.callAxios('POST', `${apiPrefix}logout`, null, undefined, undefined, true);
    return res;
  }

  // 確認是否是登入狀態
    static async checkLoginStatus() {
    const res = await this.callAxios('POST', `${apiPrefix}api/user/check`, null, undefined, undefined, true);
    return res;
  }

  // admin取得景點
  static async getAdminProducts() {
    // const params = {
    //   rocNumOrBan,
    // };
    const res = await this.callAxios('GET', `${apiPrefix}api/${apiPath}/admin/products/all`, null, undefined, undefined, true);
    return res;
  }

  // 更新
  static async editAdminProduct(id, {title, category, origin_price, price, unit, description, content, is_enabled,imageUrl, imagesUrl }) {
    const params = {
    'data':{ 
      title,
      category,
      origin_price,
      price,
      unit,
      description,
      content,
      is_enabled,
      imageUrl,
      imagesUrl,
      }
    };
    const res = await this.callAxios('PUT', `${apiPrefix}api/${apiPath}/admin/product/${id}`, params, undefined, undefined, true);
    return res;
  }
    // 新增
  static async addAdminProduct( {title, category, origin_price, price, unit, description, content, is_enabled,imageUrl, imagesUrl }) {
    const params = {
    'data':{ 
      title,
      category,
      origin_price,
      price,
      unit,
      description,
      content,
      is_enabled,
      imageUrl,
      imagesUrl,
      }
    };
    const res = await this.callAxios('POST', `${apiPrefix}api/${apiPath}/admin/product/`, params, undefined, undefined, true);
    return res;
  }

  // 刪除
    static async deleteAdminProduct(id) {
    const res = await this.callAxios('DELETE', `${apiPrefix}api/${apiPath}/admin/product/${id}`, null, undefined, undefined, true);
    return res;
  }
}

export default atrApi;
