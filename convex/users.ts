import { query } from "./_generated/server";
import { auth } from './auth'

export const current = query({
    args: {},
    handler: async (ctx) => {
        const useId = await auth.getUserId(ctx);

        if (useId === null) {
            return null;
        }
        return await ctx.db.get(useId)
    },

})