import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Media = {
    slug : "Media",
    access: {
        read : () => true,
        create : () => true,
        update : () => true,
        delete : () => true
    },
    admin : {
        useAsTitle : "title"
    },
    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation == "create") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Media",
                            action: "create",
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == "update") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Media",
                            action: "update",
                            timestamp: new Date(),
                        },
                    });
                } else if (args.operation == "delete") {
                    payload.create({
                        collection: "Log",
                        data: {
                            collectionName: "Media",
                            action: "delete",
                            timestamp: new Date(),
                        },
                    });
                }
            },
        ],
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        mimeTypes:  ['image/*'],
    }
}

export default Media