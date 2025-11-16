export const errorHandler = (err, req, res, next) => {
    console.error("🔥 ERROR:", err);

    const status = err.statusCode || 500;

    return res.status(status).json({
        success: false,
        message: err.message || "Internal server error",
        error: {
            code: err.code || "SERVER_ERROR",
            details: err.details || null
        }
    });
};
