export enum DebugGFXModes {
    DEBUG_GFX_MODE_NONE = 0,
    DEBUG_GFX_MODE_MINIMUM,
    DEBUG_GFX_MODE_AFFECTS_PERFORMANCE,
    DEBUG_GFX_MODE_VERBOSE,
    DEBUG_GFX_MODE_ALL,
};

export enum RunCommandReturnTypes {
    RUN_COMMAND_COMMAND_HANDLED = 0,
    RUN_COMMAND_COMMAND_UNHANDLED,
    RUN_COMMAND_COMMAND_WARNING,
    RUN_COMMAND_COMMAND_ERROR,
};

export enum GFXErrorType {
    GFX_ERROR_TYPE_NONE = 0,
    GFX_ERROR_TYPE_INIT,
    GFX_ERROR_TYPE_OUT_OF_MEMORY_IMAGE,
    GFX_ERROR_TYPE_OUT_OF_MEMORY_BUFFER,
    GFX_ERROR_TYPE_OUT_OF_MEMORY_STAGING,
    GFX_ERROR_TYPE_RENDER_RECORDING,
    GFX_ERROR_TYPE_RENDER_CMD_FAILED,
    GFX_ERROR_TYPE_RENDER_SUBMIT_FAILED,
    GFX_ERROR_TYPE_SWAP_FAILED,
    GFX_ERROR_TYPE_UNKNOWN,
};

export enum GFXWarningType {
    GFX_WARNING_TYPE_NONE = 0,
    GFX_WARNING_TYPE_INIT_FAILED,
    GFX_WARNING_TYPE_INIT_FAILED_MISSING_INTEGRATED_GPU_DRIVER,
    GFX_WARNING_LOW_ON_MEMORY,
    GFX_WARNING_MISSING_EXTENSION,
    GFX_WARNING_TYPE_UNKNOWN,
};
