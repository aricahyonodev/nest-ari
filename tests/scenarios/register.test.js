import { assert } from "chai";
import reqresApi from "../pages/reqres.api";
import * as data from '$root/data/user.data';
describe('Register', ()=> {
    it('Should unsuccessful register when insert invalid data', async () => {
        const res = await reqresApi.register(data.INVALID_REGISTER);
        assert.equal(res.status, 400);
    });
})