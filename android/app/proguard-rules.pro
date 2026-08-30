# ProGuard / R8 Rules for Sensei & Google AI Edge LiteRT-LM

# Keep LiteRT-LM classes & JNI native bindings
-keep class com.google.ai.edge.litertlm.** { *; }
-keepclassmembers class com.google.ai.edge.litertlm.** { *; }

# Keep Sensei AI & Bridge classes
-keep class com.sensei.bingelingo.ai.** { *; }
-keepclassmembers class com.sensei.bingelingo.ai.** { *; }

# Javascript Interface annotations
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep native C++ library methods
-keepclasseswithmembernames class * {
    native <methods>;
}
