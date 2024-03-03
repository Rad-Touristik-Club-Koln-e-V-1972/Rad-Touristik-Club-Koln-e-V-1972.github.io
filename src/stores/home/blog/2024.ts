import BlogEntryBuilder from 'src/models/builder/home/BlogEntryBuilder'

export default [
    new BlogEntryBuilder()
        .setAlbumIDs('288bbe8e-aa03-492f-b206-8e6932e7c45d')
        .setDate('2024-03-01')
        .setId('3d9915bc-63a2-45d2-a0e6-b54de977e068')
        .setText(
            `Der neue Vorstand vom RTC Köln e.V. (von links):

            Judith (Geschäftsführerin), Diana (1. Vorsitzende),
            Matthias (Kassenwart), Manni (Sportwart) und Frank (2. Vorsitzender).`,
        )
        .setTitle('Neuer Vorstand beim RTC Köln e.V. 1972')
        .buildBlogEntry(),
]
