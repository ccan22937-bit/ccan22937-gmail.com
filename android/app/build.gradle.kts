plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.sensei.bingelingo"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.sensei.bingelingo"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0.0"

        ndk {
            // LiteRT-LM GPU OpenCL/Vulkan binary targets
            abiFilters.addAll(listOf("arm64-v8a", "armeabi-v7a", "x86_64"))
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    // Official Google AI Edge LiteRT-LM & MediaPipe Tasks GenAI
    implementation("com.google.ai.edge.litertlm:litertlm-android:1.0.0")
    implementation("com.google.mediapipe:tasks-genai:0.10.14")

    // Google Play Services Auth (Native Google Sign-In)
    implementation("com.google.android.gms:play-services-auth:20.7.0")

    // Android Core & Coroutines
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.8.0")
}
