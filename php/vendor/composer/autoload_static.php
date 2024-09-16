<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4db438af7e8a612dace446a10fa4b873
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4db438af7e8a612dace446a10fa4b873::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4db438af7e8a612dace446a10fa4b873::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4db438af7e8a612dace446a10fa4b873::$classMap;

        }, null, ClassLoader::class);
    }
}
