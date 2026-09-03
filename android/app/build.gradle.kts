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
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
        debug {
            isMinifyEnabled = false
        }
    }

    androidResources {
        noCompress.addAll(listOf("litertlm", "bin", "tflite"))
    }

    packaging {
        resources {
            excludes.add("META-INF/DEPENDENCIES")
            excludes.add("META-INF/LICENSE")
            excludes.add("META-INF/LICENSE.txt")
            excludes.add("META-INF/license.txt")
            excludes.add("META-INF/NOTICE")
            excludes.add("META-INF/NOTICE.txt")
            excludes.add("META-INF/notice.txt")
            excludes.add("META-INF/ASL2.0")
            excludes.add("META-INF/INDEX.LIST")
        }
        jniLibs {
            pickFirsts.add("**/liblitertlm*.so")
            pickFirsts.add("**/libtensorflowlite*.so")
            pickFirsts.add("**/libOpenCL.so")
            pickFirsts.add("**/libc++_shared.so")
        }
    }

    lint {
        isAbortOnError = false
        isCheckReleaseBuilds = false
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

kotlin {
    jvmToolchain(17)
}


dependencies {
    // Official Google AI Edge LiteRT-LM Android Engine (Supports .litertlm & Gemma 3 on GPU)
    implementation("com.google.ai.edge.litertlm:litertlm-android:0.16.1")

    // Google Play Services Auth (Native Google Sign-In)
    implementation("com.google.android.gms:play-services-auth:20.7.0")

    // Android Core & Coroutines
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.8.0")
}
