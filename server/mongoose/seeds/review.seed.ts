const reviewSeeder = async (mongoose: any): Promise<void> => {
    await mongoose.review.deleteMany();
    await mongoose.review.insertMany([]);
};

export default reviewSeeder;
