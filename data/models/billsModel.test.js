const db = require('../dbConfig')
const { insert, remove} = require("./billsModel")

describe('bills model', () => {
    beforeEach(async () => {
        await db('bills').truncate();
    })

    describe('insert', () => {
        it('should add a new friend', async () => {
          await insert({ total: "580.45", split: '5' })
          const bills = await db('bills');
          expect(bills).toHaveLength(1)
        })
        it('should insert the provided bill', async () => {
            let bill = {total: '45.50', split: '2'};
            const inserted = await insert(bill);
            expect(inserted.total).toBe(bill.total)
        })
    })
});