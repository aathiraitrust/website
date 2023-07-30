import * as timeModule from "../../../components/time/time_util"

describe('time_util', () => {

    it('returns current time as async', async () => {
        const reference_start_time = new Date();
        const result = await timeModule.currentTime();
        const reference_end_time = new Date();
        expect(result.valueOf()).toBeGreaterThanOrEqual(reference_start_time.valueOf());
        expect(result.valueOf()).toBeLessThanOrEqual(reference_end_time.valueOf());
    })
})